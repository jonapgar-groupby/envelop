const tap = require('tap');
const utils = require('@newrelic/test-utilities');
const { useNewRelic } = require('@envelop/newrelic');
const { createTestkit } = require('@envelop/testing');
const { makeExecutableSchema } = require('@graphql-tools/schema');

// This adds all the assertions to tap's `Test` class.
utils.assert.extendTap(tap);

const schema = makeExecutableSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello(greetingVerb: String! = "Hello", name: String! = "world!"): String
      foo: Foo
      ignoreMyError: String
    }
    type Foo {
      bar: String
    }
  `,
  resolvers: {
    Query: {
      hello: (_, { greetingVerb, name }) => [greetingVerb, name].join(' '),
      foo: () => ({}),
      ignoreMyError: () => {
        throw new Error('Ignore me!');
      },
    },
    Foo: {
      bar: () => 'bar',
    },
  },
});

tap.test('base configuration', t => {
  const helper = utils.TestAgent.makeInstrumented();
  t.teardown(() => helper.unload());

  return helper.runInTransaction(async tx => {
    const testKit = createTestkit(
      [
        useNewRelic({
          shim: helper.getShim(),
        }),
      ],
      schema
    );
    // Do some testing logic...

    // This will check that transaction state hasn't been lost and that the given
    // transaction is the currently active one. A good check to make in the
    // callbacks to asynchronous methods.
    t.transaction(tx);

    await testKit.execute(`query Greetings { hello }`);

    t.equal(tx.nameState.pathStack[0].path, 'query/Greetings', 'should have correct transaction name');

    t.equal(
      [...tx.trace.root._spanContext.customAttributes.attributes.keys()].join(', '),
      'graphql.execute.operationName, graphql.execute.operationType'
    );

    // Many metrics are not created until the transaction ends, if you're
    // missing metrics in your instrumentation tests, this may help.
    tx.end();

    // This will check that the metrics given have been created. Extra metrics
    // are allowed.
    t.metrics(['Supportability/ExternalModules/Envelop_NewRelic_Plugin']);
  });
});

tap.test('includeOperationDocument: true', t => {
  const helper = utils.TestAgent.makeInstrumented();
  t.teardown(() => helper.unload());

  return helper.runInTransaction(async tx => {
    const testKit = createTestkit(
      [
        useNewRelic({
          includeOperationDocument: true,
          shim: helper.getShim(),
        }),
      ],
      schema
    );
    // Do some testing logic...

    // This will check that transaction state hasn't been lost and that the given
    // transaction is the currently active one. A good check to make in the
    // callbacks to asynchronous methods.
    t.transaction(tx);

    await testKit.execute(`query Greetings { hello }`);

    t.equal(
      [...tx.trace.root._spanContext.customAttributes.attributes.keys()].join(', '),
      'graphql.execute.operationName, graphql.execute.operationType, graphql.execute.document'
    );

    // Many metrics are not created until the transaction ends, if you're
    // missing metrics in your instrumentation tests, this may help.
    tx.end();
  });
});

tap.test('includeExecuteVariables: true', t => {
  const helper = utils.TestAgent.makeInstrumented();
  t.teardown(() => helper.unload());

  return helper.runInTransaction(async tx => {
    const testKit = createTestkit(
      [
        useNewRelic({
          includeExecuteVariables: true,
          shim: helper.getShim(),
        }),
      ],
      schema
    );
    // Do some testing logic...

    // This will check that transaction state hasn't been lost and that the given
    // transaction is the currently active one. A good check to make in the
    // callbacks to asynchronous methods.
    t.transaction(tx);

    await testKit.execute(`query Greetings { hello }`);

    t.equal(
      [...tx.trace.root._spanContext.customAttributes.attributes.keys()].join(', '),
      'graphql.execute.operationName, graphql.execute.operationType, graphql.execute.variables'
    );

    // Many metrics are not created until the transaction ends, if you're
    // missing metrics in your instrumentation tests, this may help.
    tx.end();
  });
});

tap.test('includeExecuteVariables: RegExp', t => {
  const helper = utils.TestAgent.makeInstrumented();
  t.teardown(() => helper.unload());

  return helper.runInTransaction(async tx => {
    const testKit = createTestkit(
      [
        useNewRelic({
          includeExecuteVariables: /verb/,
          shim: helper.getShim(),
        }),
      ],
      schema
    );
    // Do some testing logic...

    // This will check that transaction state hasn't been lost and that the given
    // transaction is the currently active one. A good check to make in the
    // callbacks to asynchronous methods.
    t.transaction(tx);

    await testKit.execute(
      /* GraphQL */ `
        query Greetings($verb: String!, $name: String!) {
          hello(greetingVerb: $verb, name: $name)
        }
      `,
      {
        verb: 'Hi',
        name: 'Dotan',
      }
    );

    t.equal(
      [...tx.trace.root._spanContext.customAttributes.attributes.keys()].join(', '),
      'graphql.execute.operationName, graphql.execute.operationType, graphql.execute.variables'
    );

    t.equal(
      tx.trace.root._spanContext.customAttributes.attributes.get('graphql.execute.variables').value,
      `{"verb":"Hi"}`
    );

    // Many metrics are not created until the transaction ends, if you're
    // missing metrics in your instrumentation tests, this may help.
    tx.end();
  });
});

tap.test('includeRawResult: true', t => {
  const helper = utils.TestAgent.makeInstrumented();
  t.teardown(() => helper.unload());

  return helper.runInTransaction(async tx => {
    const testKit = createTestkit(
      [
        useNewRelic({
          includeRawResult: true,
          shim: helper.getShim(),
        }),
      ],
      schema
    );
    // Do some testing logic...

    // This will check that transaction state hasn't been lost and that the given
    // transaction is the currently active one. A good check to make in the
    // callbacks to asynchronous methods.
    t.transaction(tx);

    await testKit.execute(`query Greetings { hello }`);

    t.equal(
      [...tx.trace.root._spanContext.customAttributes.attributes.keys()].join(', '),
      'graphql.execute.operationName, graphql.execute.operationType, graphql.execute.result'
    );

    // Many metrics are not created until the transaction ends, if you're
    // missing metrics in your instrumentation tests, this may help.
    tx.end();
  });
});

tap.test('skipError', t => {
  const helper = utils.TestAgent.makeInstrumented();
  t.teardown(() => helper.unload());

  return helper.runInTransaction(async tx => {
    const testKit = createTestkit(
      [
        useNewRelic({
          skipError: e => e.message === 'Ignore me!',
          shim: helper.getShim(),
        }),
      ],
      schema
    );
    // Do some testing logic...

    // This will check that transaction state hasn't been lost and that the given
    // transaction is the currently active one. A good check to make in the
    // callbacks to asynchronous methods.
    t.transaction(tx);

    await testKit.execute(`query ErrorLog { hello ignoreMyError }`);
    t.equal(tx.trace.root._spanContext.hasError, false);

    // Many metrics are not created until the transaction ends, if you're
    // missing metrics in your instrumentation tests, this may help.
    tx.end();
  });
});

tap.test('rootFieldsNaming: true', t => {
  const helper = utils.TestAgent.makeInstrumented();
  t.teardown(() => helper.unload());

  return helper.runInTransaction(async tx => {
    const testKit = createTestkit(
      [
        useNewRelic({
          rootFieldsNaming: true,
          shim: helper.getShim(),
        }),
      ],
      schema
    );
    // Do some testing logic...

    // This will check that transaction state hasn't been lost and that the given
    // transaction is the currently active one. A good check to make in the
    // callbacks to asynchronous methods.
    t.transaction(tx);

    await testKit.execute(`query Greetings { hello }`);

    t.equal(tx.nameState.pathStack[0].path, 'query/Greetings/hello', 'should have correct transaction name');

    // Many metrics are not created until the transaction ends, if you're
    // missing metrics in your instrumentation tests, this may help.
    tx.end();
  });
});

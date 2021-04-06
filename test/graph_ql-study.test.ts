import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as GraphQlStudy from '../lib/graph_ql-study-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new GraphQlStudy.GraphQlStudyStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

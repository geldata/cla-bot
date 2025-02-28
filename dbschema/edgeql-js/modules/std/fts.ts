// GENERATED by @gel/generate v0.6.0

import * as $ from "../../reflection";
import * as _ from "../../imports";
import type * as _std from "../std";
export type $ElasticLanguage = {
  "ara": $.$expr_Literal<$ElasticLanguage>;
  "bul": $.$expr_Literal<$ElasticLanguage>;
  "cat": $.$expr_Literal<$ElasticLanguage>;
  "ces": $.$expr_Literal<$ElasticLanguage>;
  "ckb": $.$expr_Literal<$ElasticLanguage>;
  "dan": $.$expr_Literal<$ElasticLanguage>;
  "deu": $.$expr_Literal<$ElasticLanguage>;
  "ell": $.$expr_Literal<$ElasticLanguage>;
  "eng": $.$expr_Literal<$ElasticLanguage>;
  "eus": $.$expr_Literal<$ElasticLanguage>;
  "fas": $.$expr_Literal<$ElasticLanguage>;
  "fin": $.$expr_Literal<$ElasticLanguage>;
  "fra": $.$expr_Literal<$ElasticLanguage>;
  "gle": $.$expr_Literal<$ElasticLanguage>;
  "glg": $.$expr_Literal<$ElasticLanguage>;
  "hin": $.$expr_Literal<$ElasticLanguage>;
  "hun": $.$expr_Literal<$ElasticLanguage>;
  "hye": $.$expr_Literal<$ElasticLanguage>;
  "ind": $.$expr_Literal<$ElasticLanguage>;
  "ita": $.$expr_Literal<$ElasticLanguage>;
  "lav": $.$expr_Literal<$ElasticLanguage>;
  "nld": $.$expr_Literal<$ElasticLanguage>;
  "nor": $.$expr_Literal<$ElasticLanguage>;
  "por": $.$expr_Literal<$ElasticLanguage>;
  "ron": $.$expr_Literal<$ElasticLanguage>;
  "rus": $.$expr_Literal<$ElasticLanguage>;
  "spa": $.$expr_Literal<$ElasticLanguage>;
  "swe": $.$expr_Literal<$ElasticLanguage>;
  "tha": $.$expr_Literal<$ElasticLanguage>;
  "tur": $.$expr_Literal<$ElasticLanguage>;
  "zho": $.$expr_Literal<$ElasticLanguage>;
  "edb_Brazilian": $.$expr_Literal<$ElasticLanguage>;
  "edb_ChineseJapaneseKorean": $.$expr_Literal<$ElasticLanguage>;
} & $.EnumType<"std::fts::ElasticLanguage", ["ara", "bul", "cat", "ces", "ckb", "dan", "deu", "ell", "eng", "eus", "fas", "fin", "fra", "gle", "glg", "hin", "hun", "hye", "ind", "ita", "lav", "nld", "nor", "por", "ron", "rus", "spa", "swe", "tha", "tur", "zho", "edb_Brazilian", "edb_ChineseJapaneseKorean"]>;
const ElasticLanguage: $ElasticLanguage = $.makeType<$ElasticLanguage>(_.spec, "de04eafc-46d5-5037-aae6-52774a4cf421", _.syntax.literal);

export type $Language = {
  "ara": $.$expr_Literal<$Language>;
  "hye": $.$expr_Literal<$Language>;
  "eus": $.$expr_Literal<$Language>;
  "cat": $.$expr_Literal<$Language>;
  "dan": $.$expr_Literal<$Language>;
  "nld": $.$expr_Literal<$Language>;
  "eng": $.$expr_Literal<$Language>;
  "fin": $.$expr_Literal<$Language>;
  "fra": $.$expr_Literal<$Language>;
  "deu": $.$expr_Literal<$Language>;
  "ell": $.$expr_Literal<$Language>;
  "hin": $.$expr_Literal<$Language>;
  "hun": $.$expr_Literal<$Language>;
  "ind": $.$expr_Literal<$Language>;
  "gle": $.$expr_Literal<$Language>;
  "ita": $.$expr_Literal<$Language>;
  "nor": $.$expr_Literal<$Language>;
  "por": $.$expr_Literal<$Language>;
  "ron": $.$expr_Literal<$Language>;
  "rus": $.$expr_Literal<$Language>;
  "spa": $.$expr_Literal<$Language>;
  "swe": $.$expr_Literal<$Language>;
  "tur": $.$expr_Literal<$Language>;
} & $.EnumType<"std::fts::Language", ["ara", "hye", "eus", "cat", "dan", "nld", "eng", "fin", "fra", "deu", "ell", "hin", "hun", "ind", "gle", "ita", "nor", "por", "ron", "rus", "spa", "swe", "tur"]>;
const Language: $Language = $.makeType<$Language>(_.spec, "efb3a506-d101-5c65-b845-abf56604c8e3", _.syntax.literal);

export type $LuceneLanguage = {
  "ara": $.$expr_Literal<$LuceneLanguage>;
  "ben": $.$expr_Literal<$LuceneLanguage>;
  "bul": $.$expr_Literal<$LuceneLanguage>;
  "cat": $.$expr_Literal<$LuceneLanguage>;
  "ces": $.$expr_Literal<$LuceneLanguage>;
  "ckb": $.$expr_Literal<$LuceneLanguage>;
  "dan": $.$expr_Literal<$LuceneLanguage>;
  "deu": $.$expr_Literal<$LuceneLanguage>;
  "ell": $.$expr_Literal<$LuceneLanguage>;
  "eng": $.$expr_Literal<$LuceneLanguage>;
  "est": $.$expr_Literal<$LuceneLanguage>;
  "eus": $.$expr_Literal<$LuceneLanguage>;
  "fas": $.$expr_Literal<$LuceneLanguage>;
  "fin": $.$expr_Literal<$LuceneLanguage>;
  "fra": $.$expr_Literal<$LuceneLanguage>;
  "gle": $.$expr_Literal<$LuceneLanguage>;
  "glg": $.$expr_Literal<$LuceneLanguage>;
  "hin": $.$expr_Literal<$LuceneLanguage>;
  "hun": $.$expr_Literal<$LuceneLanguage>;
  "hye": $.$expr_Literal<$LuceneLanguage>;
  "ind": $.$expr_Literal<$LuceneLanguage>;
  "ita": $.$expr_Literal<$LuceneLanguage>;
  "lav": $.$expr_Literal<$LuceneLanguage>;
  "lit": $.$expr_Literal<$LuceneLanguage>;
  "nld": $.$expr_Literal<$LuceneLanguage>;
  "nor": $.$expr_Literal<$LuceneLanguage>;
  "por": $.$expr_Literal<$LuceneLanguage>;
  "ron": $.$expr_Literal<$LuceneLanguage>;
  "rus": $.$expr_Literal<$LuceneLanguage>;
  "spa": $.$expr_Literal<$LuceneLanguage>;
  "srp": $.$expr_Literal<$LuceneLanguage>;
  "swe": $.$expr_Literal<$LuceneLanguage>;
  "tha": $.$expr_Literal<$LuceneLanguage>;
  "tur": $.$expr_Literal<$LuceneLanguage>;
  "edb_Brazilian": $.$expr_Literal<$LuceneLanguage>;
  "edb_ChineseJapaneseKorean": $.$expr_Literal<$LuceneLanguage>;
  "edb_Indian": $.$expr_Literal<$LuceneLanguage>;
} & $.EnumType<"std::fts::LuceneLanguage", ["ara", "ben", "bul", "cat", "ces", "ckb", "dan", "deu", "ell", "eng", "est", "eus", "fas", "fin", "fra", "gle", "glg", "hin", "hun", "hye", "ind", "ita", "lav", "lit", "nld", "nor", "por", "ron", "rus", "spa", "srp", "swe", "tha", "tur", "edb_Brazilian", "edb_ChineseJapaneseKorean", "edb_Indian"]>;
const LuceneLanguage: $LuceneLanguage = $.makeType<$LuceneLanguage>(_.spec, "17c3aca3-4464-5257-bc9f-591fb7bf704c", _.syntax.literal);

export type $PGLanguage = {
  "xxx_simple": $.$expr_Literal<$PGLanguage>;
  "ara": $.$expr_Literal<$PGLanguage>;
  "hye": $.$expr_Literal<$PGLanguage>;
  "eus": $.$expr_Literal<$PGLanguage>;
  "cat": $.$expr_Literal<$PGLanguage>;
  "dan": $.$expr_Literal<$PGLanguage>;
  "nld": $.$expr_Literal<$PGLanguage>;
  "eng": $.$expr_Literal<$PGLanguage>;
  "fin": $.$expr_Literal<$PGLanguage>;
  "fra": $.$expr_Literal<$PGLanguage>;
  "deu": $.$expr_Literal<$PGLanguage>;
  "ell": $.$expr_Literal<$PGLanguage>;
  "hin": $.$expr_Literal<$PGLanguage>;
  "hun": $.$expr_Literal<$PGLanguage>;
  "ind": $.$expr_Literal<$PGLanguage>;
  "gle": $.$expr_Literal<$PGLanguage>;
  "ita": $.$expr_Literal<$PGLanguage>;
  "lit": $.$expr_Literal<$PGLanguage>;
  "npi": $.$expr_Literal<$PGLanguage>;
  "nor": $.$expr_Literal<$PGLanguage>;
  "por": $.$expr_Literal<$PGLanguage>;
  "ron": $.$expr_Literal<$PGLanguage>;
  "rus": $.$expr_Literal<$PGLanguage>;
  "srp": $.$expr_Literal<$PGLanguage>;
  "spa": $.$expr_Literal<$PGLanguage>;
  "swe": $.$expr_Literal<$PGLanguage>;
  "tam": $.$expr_Literal<$PGLanguage>;
  "tur": $.$expr_Literal<$PGLanguage>;
  "yid": $.$expr_Literal<$PGLanguage>;
} & $.EnumType<"std::fts::PGLanguage", ["xxx_simple", "ara", "hye", "eus", "cat", "dan", "nld", "eng", "fin", "fra", "deu", "ell", "hin", "hun", "ind", "gle", "ita", "lit", "npi", "nor", "por", "ron", "rus", "srp", "spa", "swe", "tam", "tur", "yid"]>;
const PGLanguage: $PGLanguage = $.makeType<$PGLanguage>(_.spec, "f613baf6-1ed8-557e-8f68-e91a0d39e65d", _.syntax.literal);

export type $Weight = {
  "A": $.$expr_Literal<$Weight>;
  "B": $.$expr_Literal<$Weight>;
  "C": $.$expr_Literal<$Weight>;
  "D": $.$expr_Literal<$Weight>;
} & $.EnumType<"std::fts::Weight", ["A", "B", "C", "D"]>;
const Weight: $Weight = $.makeType<$Weight>(_.spec, "cb579c2d-cc54-54e6-9636-fff6c1643771", _.syntax.literal);

export type $document = $.ScalarType<"std::fts::document", unknown>;
const document: $.scalarTypeWithConstructor<$document, never> = $.makeType<$.scalarTypeWithConstructor<$document, never>>(_.spec, "1d63520b-60fc-5ffe-a70c-ebdb1b3887c2", _.syntax.literal);

type with_optionsλFuncExpr<
  NamedArgs extends {
    "language": _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
    "weight_category"?: _.castMaps.orScalarLiteral<$.TypeSet<$Weight>>,
  },
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
> = $.$expr_Function<
  $document, $.cardutil.multiplyCardinalities<$.cardutil.multiplyCardinalities<$.cardutil.paramCardinality<P1>, $.cardutil.paramCardinality<NamedArgs["language"]>>, $.cardutil.optionalParamCardinality<NamedArgs["weight_category"]>>
>;
/**
 * 
        Adds language and weight category information to a string,
        so it be indexed with std::fts::index.
    
 */
function with_options<
  NamedArgs extends {
    "language": _.castMaps.orScalarLiteral<$.TypeSet<$.EnumType>>,
    "weight_category"?: _.castMaps.orScalarLiteral<$.TypeSet<$Weight>>,
  },
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  namedArgs: NamedArgs,
  text: P1,
): with_optionsλFuncExpr<NamedArgs, P1>;
function with_options(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::fts::with_options', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], namedArgs: {"language": {typeId: "48896eaf-b8af-5f80-9073-0884475d6ee5", optional: false, setoftype: false, variadic: false}, "weight_category": {typeId: "cb579c2d-cc54-54e6-9636-fff6c1643771", optional: true, setoftype: false, variadic: false}}, returnTypeId: "1d63520b-60fc-5ffe-a70c-ebdb1b3887c2"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::fts::with_options",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type searchλFuncExpr<
  NamedArgs extends {
    "language"?: _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
    "weights"?: $.TypeSet<$.ArrayType<_std.$float64>>,
  },
  P1 extends $.TypeSet<$.AnyObjectType>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
> = $.$expr_Function<
  $.NamedTupleType<{object: $.AnyObjectType, score: _std.$float32}>, $.cardutil.overrideLowerBound<$.cardutil.multiplyCardinalities<$.cardutil.multiplyCardinalities<$.cardutil.multiplyCardinalities<$.cardutil.paramCardinality<P1>, $.cardutil.paramCardinality<P2>>, $.cardutil.optionalParamCardinality<NamedArgs["language"]>>, $.cardutil.optionalParamCardinality<NamedArgs["weights"]>>, "Zero">
>;
type searchλFuncExpr2<
  P1 extends $.TypeSet<$.AnyObjectType>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
> = $.$expr_Function<
  $.NamedTupleType<{object: $.AnyObjectType, score: _std.$float32}>, $.cardutil.overrideLowerBound<$.cardutil.multiplyCardinalities<$.cardutil.paramCardinality<P1>, $.cardutil.paramCardinality<P2>>, "Zero">
>;
/**
 * 
        Search an object using its std::fts::index index.
        Returns objects that match the specified query and the matching score.
    
 */
function search<
  NamedArgs extends {
    "language"?: _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
    "weights"?: $.TypeSet<$.ArrayType<_std.$float64>>,
  },
  P1 extends $.TypeSet<$.AnyObjectType>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  namedArgs: NamedArgs,
  object: P1,
  query: P2,
): searchλFuncExpr<NamedArgs, P1, P2>;
/**
 * 
        Search an object using its std::fts::index index.
        Returns objects that match the specified query and the matching score.
    
 */
function search<
  P1 extends $.TypeSet<$.AnyObjectType>,
  P2 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$str>>,
>(
  object: P1,
  query: P2,
): searchλFuncExpr2<P1, P2>;
function search(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::fts::search', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000003", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], namedArgs: {"language": {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}, "weights": {typeId: "2b65df4c-4942-59b1-8819-061ca68b2f4e", optional: true, setoftype: false, variadic: false}}, returnTypeId: "c13eb6f1-a05c-533f-bfe8-a50b1a077fd0", returnTypemod: "OptionalType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::fts::search",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};



export { ElasticLanguage, Language, LuceneLanguage, PGLanguage, Weight, document };

type __defaultExports = {
  "ElasticLanguage": typeof ElasticLanguage;
  "Language": typeof Language;
  "LuceneLanguage": typeof LuceneLanguage;
  "PGLanguage": typeof PGLanguage;
  "Weight": typeof Weight;
  "document": typeof document;
  "with_options": typeof with_options;
  "search": typeof search
};
const __defaultExports: __defaultExports = {
  "ElasticLanguage": ElasticLanguage,
  "Language": Language,
  "LuceneLanguage": LuceneLanguage,
  "PGLanguage": PGLanguage,
  "Weight": Weight,
  "document": document,
  "with_options": with_options,
  "search": search
};
export default __defaultExports;

// SYNTAX TEST "source.js.jsx"

// class fields, statics and methods
class SomeClass {
  myProperty: string = 'some value'           
//^^^^^^^^^^^ ^^^^^^ ^ ^^^^^ ^^^^^^             meta.class.body.js
//^^^^^^^^^^                                    variable.other.readwrite.js
//          ^                                   punctuation.type.flowtype
//            ^^^^^^                            support.type.builtin.primitive.flowtype
//                   ^                          keyword.operator.assignment.js
//                     ^^^^^ ^^^^^^             string.quoted.single.js
//                     ^                        punctuation.definition.string.begin.js
//                                ^             punctuation.definition.string.end.js
  xxx: number = 1
//^^^^ ^^^^^^ ^ ^  meta.class.body.js
//^^^              variable.other.readwrite.js
//   ^             punctuation.type.flowtype
//     ^^^^^^      support.type.builtin.primitive.flowtype
//            ^    keyword.operator.assignment.js
//              ^  constant.numeric.js
  declare = "aaaa"
//^^^^^^^ ^ ^^^^^^  meta.class.body.js
//^^^^^^^           variable.other.readwrite.js
//        ^         keyword.operator.assignment.js
//          ^^^^^^  string.quoted.double.js
//          ^       punctuation.definition.string.begin.js
//               ^  punctuation.definition.string.end.js
  static anamedVar
//^^^^^^ ^^^^^^^^^  meta.class.body.js
//^^^^^^            storage.modifier.js
//       ^^^^^^^^^  variable.other.readwrite.js
  anotherVar
//^^^^^^^^^^  meta.class.body.js
//^^^^^^^^^^  variable.other.readwrite.js
  [a]() {}
//^^^^^ ^^  meta.class.body.js
//^^^^^     meta.function.method.js
//^ ^       meta.brace.square.js
// ^        variable.other.readwrite.js
//   ^      punctuation.definition.parameters.begin.js
//    ^     punctuation.definition.parameters.end.js
//      ^^  meta.brace.curly.js
  'aaa'() {}
//^^^^^^^ ^^  meta.class.body.js
//^^^^^^^     meta.function.method.js
//^^^^^       entity.name.function.method.js
//     ^      punctuation.definition.parameters.begin.js
//      ^     punctuation.definition.parameters.end.js
//        ^^  meta.brace.curly.js
  type: (a)=>string = function() { return ('any' + ' ' + 'expression'); }
//^^^^^ ^^^^^^^^^^^ ^ ^^^^^^^^^^ ^ ^^^^^^ ^^^^^^ ^ ^ ^ ^ ^^^^^^^^^^^^^^ ^    meta.class.body.js
//^^^^                ^^^^^^^^                                               storage.type.function.js
//    ^                                                                      punctuation.type.flowtype
//      ^                     ^                                              punctuation.definition.parameters.begin.js
//       ^                                                                   variable.other.readwrite.js
//        ^                    ^                                             punctuation.definition.parameters.end.js
//         ^^                                                                storage.type.function.arrow.js
//           ^^^^^^                                                          support.type.builtin.primitive.flowtype
//                  ^                                                        keyword.operator.assignment.js
//                    ^^^^^^^^^^                                             meta.function.js
//                               ^                                      ^    meta.brace.curly.js
//                                 ^^^^^^                                    keyword.control.flow.js
//                                        ^                          ^       meta.brace.round.js
//                                         ^^^^^   ^ ^   ^^^^^^^^^^^^        string.quoted.single.js
//                                         ^       ^     ^                   punctuation.definition.string.begin.js
//                                             ^     ^              ^        punctuation.definition.string.end.js
//                                               ^     ^                     keyword.operator.arithmetic.js
//                                                                    ^      punctuation.terminator.statement.js
}

// labels with function calls
const foo = {
  bar: baz()
//^^^^         constant.other.object.key.js
//^^^          string.unquoted.js
//   ^         punctuation.separator.key-value.js
//     ^^^^^   meta.function-call.without-arguments.js
//     ^^^     entity.name.function.js
//        ^^   meta.brace.round.js
};

// $JSXIntrinsics is special and magic.
// This declares the types a `span`
type $JSXIntrinsics = {
  span: JSXHelper<{id: string, class: string}> };
//^^^^                                             variable.other.readwrite.js
//    ^              ^              ^              punctuation.type.flowtype
//      ^^^^^^^^^                                  support.type.class.flowtype
//               ^                           ^     punctutation.flowtype
//                ^                                meta.brace.round.open.flowtype
//                 ^^          ^^^^^               variable.other.property.flowtype
//                     ^^^^^^         ^^^^^^       support.type.builtin.primitive.flowtype
//                           ^                     meta.delimiter.comma.js
//                                          ^      meta.brace.round.close.flowtype
//                                             ^   meta.brace.curly.js
//                                              ^  punctuation.object.end.flowtype


// Some JSX

<div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^  meta.tag.jsx
//  ^  punctuation.definition.tag.jsx
//^^   entity.name.tag.open.jsx
//  ^  JSXStartTagEnd
  <div />
//^^^^ ^^  meta.tag.jsx
//^    ^^  punctuation.definition.tag.jsx
// ^^^     entity.name.tag.open.jsx
  <h1></h1>
//^^^^^^^^^  meta.tag.jsx
//^  ^^^  ^  punctuation.definition.tag.jsx
// ^^        entity.name.tag.open.jsx
//   ^       JSXStartTagEnd
//    ^^     JSXEndTagStart
//      ^^   entity.name.tag.close.jsx
  <Component></Component>
//^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^         ^^^         ^  punctuation.definition.tag.jsx
// ^^^^^^^^^               entity.name.tag.open.jsx
// ^^^^^^^^^               support.class.component.open.jsx
//          ^              JSXStartTagEnd
//           ^^            JSXEndTagStart
//             ^^^^^^^^^   entity.name.tag.close.jsx
//             ^^^^^^^^^   support.class.component.close.jsx
  <this.component></this.component>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^              ^^^              ^  punctuation.definition.tag.jsx
// ^^^^^^^^^^^^^^                    entity.name.tag.open.jsx
// ^^^^^^^^^^^^^^                    support.class.component.open.jsx
//               ^                   JSXStartTagEnd
//                ^^                 JSXEndTagStart
//                  ^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//                  ^^^^^^^^^^^^^^   support.class.component.close.jsx
  <namespace:component></namespace:component>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^                   ^^^                   ^  punctuation.definition.tag.jsx
// ^^^^^^^^^^^^^^^^^^^                         entity.name.tag.open.jsx
// ^^^^^^^^^^^^^^^^^^^                         support.class.component.open.jsx
//                    ^                        JSXStartTagEnd
//                     ^^                      JSXEndTagStart
//                       ^^^^^^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//                       ^^^^^^^^^^^^^^^^^^^   support.class.component.close.jsx
  <custom-element></custom-element>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^              ^^^              ^  punctuation.definition.tag.jsx
// ^^^^^^^^^^^^^^                    entity.name.tag.open.jsx
// ^^^^^^^^^^^^^^                    support.class.component.open.jsx
//               ^                   JSXStartTagEnd
//                ^^                 JSXEndTagStart
//                  ^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//                  ^^^^^^^^^^^^^^   support.class.component.close.jsx
</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

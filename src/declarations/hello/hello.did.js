export const idlFactory = ({ IDL }) => {
  const ID = IDL.Text;
  const SubmitInfo = IDL.Record({
    'userName' : IDL.Text,
    'essayTitle' : IDL.Text,
    'essayTopic' : IDL.Text,
    'wordCount' : IDL.Text,
    'userId' : IDL.Text,
    'payTokens' : IDL.Nat,
    'userEdu' : IDL.Text,
    'reviewTimes' : IDL.Nat,
    'essayID' : IDL.Nat32,
  });
  const Name = IDL.Text;
  const Desc = IDL.Text;
  const Name__1 = IDL.Text;
  const Balance = IDL.Nat32;
  const UserRating = IDL.Nat32;
  const Entry = IDL.Record({
    'descript' : Desc,
    'userName' : Name__1,
    'token' : Balance,
    'userRating' : UserRating,
  });
  return IDL.Service({
    'createEssayInfo' : IDL.Func([ID, SubmitInfo], [], []),
    'createProfile' : IDL.Func([Name, Entry], [], []),
    'getEssayInfo' : IDL.Func([ID], [IDL.Opt(SubmitInfo)], []),
    'getProfile' : IDL.Func([Name], [IDL.Opt(Entry)], ['query']),
    'whoami' : IDL.Func([], [IDL.Principal], []),
    'whoami1' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };

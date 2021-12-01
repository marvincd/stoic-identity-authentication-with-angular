module {
    public type Name = Text; 
    public type Desc = Text;
    public type Balance = Nat32;
    public type UserRating = Nat32;
    public type ID = Text; // change this to principal later! it will get ic identity principial id!

public type  Entry = {
        userName : Name;
        descript : Desc;
        token  : Balance;
        userRating  : UserRating;
        // userID : Text; // can be called from index.js wiht whoami1 func
    };

    // essay info when submit button gets hit, for calcutale and work with later in profiles and balances etc
public type essaySubmitInfo = {
        userName : Text;
        userId : Text;
        essayTitle : Text;
        wordCount : Text;
        essayTopic : Text;
        userEdu : Text;
        payTokens : Nat;
        reviewTimes : Nat;
        essayID : Nat32; // is0 everytime an essay gets created +1, call this in other function
    };

}

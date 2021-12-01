import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Types "types";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

actor main {

    // from types.mo
    public type Entry = Types.Entry;
    public type SubmitInfo = Types.essaySubmitInfo;

    // types for quick working with, later can be changed to make the code pretty
    public type ID = Text;
    public type Name = Text;

    
    
    // databases
    let dbase_profiles = Map.HashMap<ID,Entry>(0,Text.equal,Text.hash);
    let dbase_essays = Map.HashMap<ID,SubmitInfo>(0,Text.equal,Text.hash);


    ///// functions/ they can be called from the index.js file

    //whoami function
    public shared (msg) func whoami() : async Principal {

         let p : Principal = msg.caller;
        
        // focus on get string into database
        return p;
    };
    
    public query ({caller}) func whoami1() : async Principal {
        return caller;
    };

    
   

    // create profile
    public func createProfile(name:Name, profiledata:Entry) : async () {
        dbase_profiles.put(name,profiledata);
    };
    // get profile by UserName
    public query func getProfile(name : Name) : async ?Entry {
        dbase_profiles.get(name)

    };
    

    // create essay
    public func createEssayInfo(id :ID, essayData:SubmitInfo) : async () {
        dbase_essays.put(id,essayData);
        Debug.print("essay data in dbase now")
    };
    // get essay info, for preview, in profile, to skyboard, get on essayID
    // type in essay ID
    public func getEssayInfo(id:ID) : async ?SubmitInfo {
        dbase_essays.get(id)
    };
}
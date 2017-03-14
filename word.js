function words(input){
	input=input.split(" ");

	var countObj={};

	var obj=[];
	var obj2=[];
	
	for(x=0;x<=input.length;x++){
		z=0;
		for(y=0; y<=input.length;y++){
			if (input[x]===input[y]){
				z++
			obj2[x]=z
			obj[y]=input[y]
			//	obj.input[y]=z
		}


	}
}
//console.log(input.length)
//console.log(obj+obj2)
var i=0;

for (i=0;i<=obj.length;i++){
	//countObj= JSON.parse(JSON.stringify(obj));
	countObj[obj[i]]=obj2[i]
}
countObj= JSON.parse(JSON.stringify(countObj))
return countObj;
}
console.log(words("word"))
class Device {
	constructor(topic) {
	  var topicArr = topic.split('/');
	  if(topicArr.length > 3 && topicArr.length < 7)
	  {
		  if(topicArr.length === 4) 
		  { 
			//both building and floor = null
			this.country = topicArr[0];
			this.city = topicArr[1];
			this.address = topicArr[2];
			this.room = topicArr[3];
		  }
		  else if(topicArr.length === 5) 
		  {
			//one of building and floor = null
			this.country = topicArr[0];
			this.city = topicArr[1];
			this.address = topicArr[2];
			if(isInt(topicArr[3])) {
				this.floor = topicArr[3];
			}				
			else
			{
				this.building = topicArr[3];
			}
			this.room = topicArr[4];
			
		  }
		  else 
		  {
			//all filled
			if(isInt(topicArr[4]))
			{
				this.country = topicArr[0];
				this.city = topicArr[1];
				this.address = topicArr[2];
				this.building = topicArr[3];
				this.floor = topicArr[4];
				this.room = topicArr[5];
			}
			else 
			{
				throw new Error('Ungültiges Topic!');
			}
		  }
		  this.id = "";
	  }
	  else 
	  {
		  throw new Error('Ungültiges Topic!');
	  }
	}
}

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

module.exports = Device;
function generateCode() 
{
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
       const codeDiv = document.getElementById('code');
        codeDiv.textContent = `Your code is: ${code}`;
  }
  
  document.addEventListener('DOMContentLoaded', () => 
  {
    document.getElementById('generate').addEventListener('click', generateCode);
  }
  );
  
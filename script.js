document.addEventListener("DOMContentLoaded", function () {
    // Select the send email button correctly
    const sendEmailButton = document.getElementById('sendEmailButton');
    
    fetch('congressmen.json')
        .then(response => response.json())
        .then(data => {
            const congressmen = data.congressmen;

            // Select the email text area for displaying the default message
            const emailTextArea = document.getElementById('emailText');


            const defaultEmailBody = `Dear Mr. Meyer,

On behalf of millions of Pakistanis and the vibrant / patriotic Pakistani diaspora, we warmly welcome you to Pakistan for the Pakistan Minerals Investment Forum 2025. Pakistan is a land of rich traditions, unmatched hospitality, and a resilient spirit that has thrived through centuries of history. Our nation takes pride in its diverse culture, dynamic youth, and untapped economic potential, qualities that make it a promising partner for global collaboration.

As you engage in discussions to deepen US-Pakistan economic ties, we urge you to recognize the immense opportunities Pakistan offers. With a population of over 240 million, 60% under the age of 30, our youth are driving innovation in sectors like IT, agriculture, renewable energy, and mining. The minerals sector alone holds $6 trillion in untapped reserves, poised to unlock prosperity for both our nations.

Pakistan and the United States share a 75-year partnership rooted in mutual respect and shared goals. While challenges exist, our people have consistently demonstrated resilience, and our democratic institutions are evolving to reflect their aspirations. We encourage you to witness firsthand the progress being made and to prioritize collaboration that benefits both nations.

We also request you to disregard divisive campaigns led by a small faction of foreign-based individuals, such as Mehlaqa Samdani, who do not represent Pakistan’s interests. Their attempts to politicize economic development undermine the aspirations of millions of Pakistanis striving for growth, stbility and prosperity.

Welcome to Pakistan, where tradition meets tomorrow.

Sincerely,`;
            // Display the initial default email body
            emailTextArea.textContent = defaultEmailBody;

            // Concatenate all emails into a single string
            const allEmailAddresses = congressmen.map(congressman => congressman.email).join(',');

            // Add event listener to the send email button
            sendEmailButton.addEventListener("click", function () {
                const mailtoLink = `mailto:${allEmailAddresses}?subject=${encodeURIComponent('Strengthening US-Pakistan Ties: A Warm Welcome to Pakistan’s Minerals Investment Forum')}&body=${encodeURIComponent(defaultEmailBody)}`;
                
                // Set mailto link and update email content preview in textarea
                sendEmailButton.href = mailtoLink;
                emailTextArea.textContent = defaultEmailBody;
            });
        })
        .catch(error => console.error('Error loading congressman data:', error));
});

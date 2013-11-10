QuoteForm.Item = DS.Model.extend({
  title: DS.attr('string'),
  label: DS.attr('string')
});
QuoteForm.Item.FIXTURES = [
  {
      title: "Please Enter Prior Zip Code",
      label: "Zip Code"
  },
  {
      title: 'Please Choose Prior City',
      label: ""
  },
  {
      title: 'Please Enter Prior Residence Address',
      label: ["Address 1", "Address 2"]
  },
  {
      title: 'Please Enter Your Prior Address',
      label: ""
  }
];
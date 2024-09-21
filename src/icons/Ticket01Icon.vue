
<template>
  <Icon :iconName="'ticket-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Ticket01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ticket-01'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>

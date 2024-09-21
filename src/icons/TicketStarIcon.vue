
<template>
  <Icon :iconName="'ticket-star'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TicketStarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ticket-star'
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

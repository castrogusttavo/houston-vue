
<template>
  <Icon :iconName="'ticket-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Ticket02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ticket-02'
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

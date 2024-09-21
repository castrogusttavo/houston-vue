
<template>
  <Icon :iconName="'cap-straight'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CapStraightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cap-straight'
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


<template>
  <Icon :iconName="'travel-bag'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TravelBagIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'travel-bag'
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

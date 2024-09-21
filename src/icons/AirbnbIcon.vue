
<template>
  <Icon :iconName="'airbnb'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirbnbIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airbnb'
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

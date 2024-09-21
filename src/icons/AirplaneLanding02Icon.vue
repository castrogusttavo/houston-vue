
<template>
  <Icon :iconName="'airplane-landing-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirplaneLanding02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airplane-landing-02'
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

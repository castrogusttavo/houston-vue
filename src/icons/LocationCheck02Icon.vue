
<template>
  <Icon :iconName="'location-check-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationCheck02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-check-02'
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

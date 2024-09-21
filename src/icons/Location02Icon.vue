
<template>
  <Icon :iconName="'location-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Location02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-02'
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


<template>
  <Icon :iconName="'location-update-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationUpdate02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-update-02'
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

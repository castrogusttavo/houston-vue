
<template>
  <Icon :iconName="'location-user-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationUser02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-user-02'
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

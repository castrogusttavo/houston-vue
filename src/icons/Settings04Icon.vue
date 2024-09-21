
<template>
  <Icon :iconName="'settings-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Settings04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'settings-04'
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

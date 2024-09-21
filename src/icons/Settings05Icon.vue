
<template>
  <Icon :iconName="'settings-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Settings05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'settings-05'
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

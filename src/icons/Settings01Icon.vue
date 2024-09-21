
<template>
  <Icon :iconName="'settings-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Settings01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'settings-01'
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

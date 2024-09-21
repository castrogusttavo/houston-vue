
<template>
  <Icon :iconName="'settings-error-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SettingsError01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'settings-error-01'
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


<template>
  <Icon :iconName="'settings-error-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SettingsError02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'settings-error-02'
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


<template>
  <Icon :iconName="'user-settings-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserSettings02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-settings-02'
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

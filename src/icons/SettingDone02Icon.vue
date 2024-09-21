
<template>
  <Icon :iconName="'setting-done-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SettingDone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'setting-done-02'
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

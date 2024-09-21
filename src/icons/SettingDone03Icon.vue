
<template>
  <Icon :iconName="'setting-done-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SettingDone03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'setting-done-03'
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


<template>
  <Icon :iconName="'setting-done-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SettingDone04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'setting-done-04'
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

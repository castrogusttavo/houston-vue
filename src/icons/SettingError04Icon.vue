
<template>
  <Icon :iconName="'setting-error-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SettingError04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'setting-error-04'
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

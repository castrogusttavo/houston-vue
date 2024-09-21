
<template>
  <Icon :iconName="'setting-done-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SettingDone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'setting-done-01'
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

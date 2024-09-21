
<template>
  <Icon :iconName="'database-setting'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatabaseSettingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-setting'
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

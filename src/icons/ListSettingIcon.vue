
<template>
  <Icon :iconName="'list-setting'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ListSettingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'list-setting'
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

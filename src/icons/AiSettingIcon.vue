
<template>
  <Icon :iconName="'ai-setting'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiSettingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-setting'
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

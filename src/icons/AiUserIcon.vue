
<template>
  <Icon :iconName="'ai-user'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiUserIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-user'
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

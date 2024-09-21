
<template>
  <Icon :iconName="'judge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JudgeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'judge'
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

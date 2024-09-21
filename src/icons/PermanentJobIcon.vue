
<template>
  <Icon :iconName="'permanent-job'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PermanentJobIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'permanent-job'
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


<template>
  <Icon :iconName="'new-job'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NewJobIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'new-job'
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

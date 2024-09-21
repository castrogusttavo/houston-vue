
<template>
  <Icon :iconName="'pipeline'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PipelineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pipeline'
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


<template>
  <Icon :iconName="'television-table'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TelevisionTableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'television-table'
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

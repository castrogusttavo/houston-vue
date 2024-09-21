
<template>
  <Icon :iconName="'information-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InformationCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'information-circle'
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


<template>
  <Icon :iconName="'align-vertical-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignVerticalCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-vertical-center'
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

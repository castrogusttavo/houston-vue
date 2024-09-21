
<template>
  <Icon :iconName="'information-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InformationSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'information-square'
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

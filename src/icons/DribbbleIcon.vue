
<template>
  <Icon :iconName="'dribbble'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DribbbleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dribbble'
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

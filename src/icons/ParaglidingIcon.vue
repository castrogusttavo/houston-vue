
<template>
  <Icon :iconName="'paragliding'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ParaglidingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paragliding'
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

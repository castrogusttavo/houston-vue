
<template>
  <Icon :iconName="'apron'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ApronIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apron'
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

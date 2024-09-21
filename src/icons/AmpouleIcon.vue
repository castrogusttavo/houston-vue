
<template>
  <Icon :iconName="'ampoule'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AmpouleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ampoule'
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


<template>
  <Icon :iconName="'last-fm'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LastFmIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'last-fm'
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

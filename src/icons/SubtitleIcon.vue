
<template>
  <Icon :iconName="'subtitle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SubtitleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'subtitle'
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

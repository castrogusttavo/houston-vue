
<template>
  <Icon :iconName="'perfume'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PerfumeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'perfume'
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
